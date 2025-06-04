import { useState, useEffect } from "react";
import { submitFormData } from "@/actions/form";
import {
	validateCPF,
	validateCNPJ,
	validateEmail,
	validatePhone,
	maskCPF,
	maskCNPJ,
	maskPhone,
	emailSchema,
	phoneSchema,
	cpfSchema,
	cnpjSchema,
} from "@/utils/validators";

export interface FormData {
	name: string;
	cpf: string;
	cnpj: string;
	email: string;
	phone: string;
}

export interface FormErrors {
	cpf: string;
	cnpj: string;
	phone: string;
	email: string;
	form: string;
}

export default function useCallToActionForm(
	isOpen: boolean,
	onClose: () => void,
) {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		cpf: "",
		cnpj: "",
		email: "",
		phone: "",
	});

	const [errors, setErrors] = useState<FormErrors>({
		cpf: "",
		cnpj: "",
		phone: "",
		email: "",
		form: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [success, setSuccess] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const nameValid = formData.name.trim().length > 0;
		const emailValid = validateEmail(formData.email);
		const phoneValid = validatePhone(formData.phone);
		const cpfValid = validateCPF(formData.cpf);
		const cnpjValid = validateCNPJ(formData.cnpj);

		// Todos os campos devem ser válidos
		setIsFormValid(
			nameValid && emailValid && phoneValid && cpfValid && cnpjValid,
		);
	}, [formData, isOpen]);

	// Gerencia a mudança nos inputs
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (name === "cpf") {
			const maskedValue = maskCPF(value);

			setFormData({
				...formData,
				[name]: maskedValue,
			});

			// Valida apenas se tiver o tamanho completo
			const unmaskedValue = maskedValue.replace(/\D/g, "");
			if (unmaskedValue.length === 11) {
				const result = cpfSchema.safeParse(maskedValue);
				setErrors({
					...errors,
					cpf: result.success ? "" : "CPF inválido",
				});
			} else {
				setErrors({ ...errors, cpf: "" });
			}
		} else if (name === "cnpj") {
			const maskedValue = maskCNPJ(value);

			setFormData({
				...formData,
				[name]: maskedValue,
			});

			// Valida apenas se tiver o tamanho completo
			const unmaskedValue = maskedValue.replace(/\D/g, "");
			if (unmaskedValue.length === 14) {
				const result = cnpjSchema.safeParse(maskedValue);
				setErrors({
					...errors,
					cnpj: result.success ? "" : "CNPJ inválido",
				});
			} else {
				setErrors({ ...errors, cnpj: "" });
			}
		} else if (name === "phone") {
			const maskedValue = maskPhone(value);

			setFormData({
				...formData,
				[name]: maskedValue,
			});

			// Valida telefone se tiver pelo menos um dígito
			const unmaskedValue = maskedValue.replace(/\D/g, "");
			if (unmaskedValue.length > 0) {
				const result = phoneSchema.safeParse(maskedValue);
				setErrors({
					...errors,
					phone: result.success ? "" : "Telefone inválido",
				});
			} else {
				setErrors({ ...errors, phone: "" });
			}
		} else if (name === "email") {
			setFormData({
				...formData,
				[name]: value,
			});

			// Validar email quando o campo tiver algum valor
			if (value) {
				const result = emailSchema.safeParse(value);
				setErrors({
					...errors,
					email: result.success ? "" : "E-mail inválido",
				});
			} else {
				setErrors({ ...errors, email: "" });
			}
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.name.trim()) {
			setErrors({ ...errors, form: "Por favor, preencha seu nome completo" });
			return;
		}

		// Validate email with Zod
		const emailResult = emailSchema.safeParse(formData.email);
		if (!emailResult.success) {
			setErrors({
				...errors,
				email: "E-mail inválido",
				form: "Por favor, forneça um e-mail válido",
			});
			return;
		}

		// Validate phone with Zod
		const phoneResult = phoneSchema.safeParse(formData.phone);
		if (!phoneResult.success) {
			setErrors({
				...errors,
				phone: "Telefone inválido",
				form: "Por favor, forneça um número de telefone válido",
			});
			return;
		}

		// Validate CPF with Zod
		const cpfResult = cpfSchema.safeParse(formData.cpf);
		if (!cpfResult.success) {
			setErrors({
				...errors,
				cpf: "CPF inválido",
				form: "Por favor, forneça um CPF válido",
			});
			return;
		}

		// Validate CNPJ with Zod
		const cnpjResult = cnpjSchema.safeParse(formData.cnpj);
		if (!cnpjResult.success) {
			setErrors({
				...errors,
				cnpj: "CNPJ inválido",
				form: "Por favor, forneça um CNPJ válido",
			});
			return;
		}

		try {
			setIsSubmitting(true);

			// Envia para o server action
			const result = await submitFormData({
				name: formData.name,
				cpf: formData.cpf,
				cnpj: formData.cnpj,
				email: formData.email,
				phone: formData.phone,
			});

			if (result.error) {
				setErrors({ ...errors, form: result.error });
			} else {
				// Sucesso
				setSuccess(true);
				// Limpa o formulário
				setFormData({
					name: "",
					cpf: "",
					cnpj: "",
					email: "",
					phone: "",
				});
				setErrors({ cpf: "", cnpj: "", phone: "", email: "", form: "" });

				// Opcional: fechar o modal após alguns segundos de sucesso
				setTimeout(() => {
					onClose();
					setSuccess(false);
				}, 3000);
			}
		} catch (error) {
			setErrors({
				...errors,
				form: "Erro ao enviar o formulário. Tente novamente.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		formData,
		errors,
		isSubmitting,
		success,
		isFormValid,
		handleChange,
		handleSubmit,
		setSuccess,
	};
}
