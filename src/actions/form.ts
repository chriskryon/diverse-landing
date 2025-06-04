"use server";

import { z } from "zod";
import { submitWaitlist } from "@/services/api";

interface FormData {
	name: string;
	cpf: string;
	cnpj: string;
	email: string;
	phone: string;
}

const formDataSchema = z.object({
	name: z.string().min(1, "nome"),
	cpf: z.string().min(1, "CPF"),
	cnpj: z.string().min(1, "CNPJ"),
	email: z.string().email("e-mail"),
	phone: z.string().min(1, "telefone"),
});

export async function submitFormData(data: FormData) {
	try {
		const result = formDataSchema.safeParse(data);
		if (!result.success) {
			const missingFields = result.error.errors.map((e) => e.message);
			return {
				error: `Por favor, preencha todos os campos obrigatórios: ${missingFields.join(
					", ",
				)}`,
			};
		}

		const cleanCpf = data.cpf.replace(/\D/g, "");
		const cleanCnpj = data.cnpj.replace(/\D/g, "");
		const cleanPhone = data.phone.replace(/\D/g, "");

		// Enviar dados para o serviço de API
		const apiResponse = await submitWaitlist({
			name: data.name,
			cpf: cleanCpf,
			cnpj: cleanCnpj,
			email: data.email,
			phone: cleanPhone,
		});

		if (apiResponse.success) {
			return { success: true };
		} else {
			return { error: apiResponse.error || "Falha ao processar a solicitação" };
		}
	} catch (error) {
		console.error("Erro ao processar formulário:", error);
		return {
			error:
				"Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
		};
	}
}
