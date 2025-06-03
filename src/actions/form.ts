"use server";

interface FormData {
	name: string;
	cpf: string;
	cnpj: string;
	email: string;
	phone: string;
}

export async function submitFormData(data: FormData) {
	try {
		// Validação básica no servidor
		if (!data.name || !data.cpf || !data.cnpj || !data.email || !data.phone) {
			const missingFields = [];
			if (!data.name) missingFields.push("nome");
			if (!data.cpf) missingFields.push("CPF");
			if (!data.cnpj) missingFields.push("CNPJ");
			if (!data.email) missingFields.push("e-mail");
			if (!data.phone) missingFields.push("telefone");

			return {
				error: `Por favor, preencha todos os campos obrigatórios: ${missingFields.join(
					", ",
				)}`,
			};
		}

		// Remover formatação dos documentos
		const cleanCpf = data.cpf.replace(/\D/g, "");
		const cleanCnpj = data.cnpj.replace(/\D/g, "");
		const cleanPhone = data.phone.replace(/\D/g, "");

		// Aqui você pode adicionar seu código para salvar os dados no banco de dados
		console.log("Dados recebidos:", {
			name: data.name,
			cpf: cleanCpf,
			cnpj: cleanCnpj,
			email: data.email,
			phone: cleanPhone,
		});

		// Simular um pequeno atraso para mostrar o loading state
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return { success: true };
	} catch (error) {
		console.error("Erro ao processar formulário:", error);
		return {
			error:
				"Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
		};
	}
}
