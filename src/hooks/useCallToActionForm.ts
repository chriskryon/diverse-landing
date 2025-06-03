import { useState, useEffect } from "react";
import { submitFormData } from "@/actions/form";

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
		const phoneValid = validatePhone(formData.phone.replace(/\D/g, ""));
		const unmaskedCPF = formData.cpf.replace(/\D/g, "");
		const cpfValid = unmaskedCPF.length === 11 && validateCPF(unmaskedCPF);
		const unmaskedCNPJ = formData.cnpj.replace(/\D/g, "");
		const cnpjValid = unmaskedCNPJ.length === 14 && validateCNPJ(unmaskedCNPJ);

		// Todos os campos devem ser válidos
		setIsFormValid(
			nameValid && emailValid && phoneValid && cpfValid && cnpjValid,
		);
	}, [formData, isOpen]);

	// Aplica máscara de CPF: 000.000.000-00
	const maskCPF = (value: string) => {
		return value
			.replace(/\D/g, "") // Remove caracteres não numéricos
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d{1,2})/, "$1-$2")
			.replace(/(-\d{2})\d+?$/, "$1"); // Limita a 11 dígitos
	};

	// Aplica máscara de CNPJ: 00.000.000/0000-00
	const maskCNPJ = (value: string) => {
		return value
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1/$2")
			.replace(/(\d{4})(\d{1,2})/, "$1-$2")
			.replace(/(-\d{2})\d+?$/, "$1"); // Limita a 14 dígitos
	};

	// Aplica máscara de telefone: (00) 00000-0000
	const maskPhone = (value: string) => {
		return value
			.replace(/\D/g, "")
			.replace(/^(\d{2})(\d)/g, "($1) $2")
			.replace(/(\d)(\d{4})$/, "$1-$2")
			.replace(/(\d{5}-\d{4})\d+?$/, "$1"); // Limita a 11 dígitos
	};

	// Valida CPF
	const validateCPF = (cpf: string) => {
		const cleanCpf = cpf.replace(/[^\d]+/g, "");

		if (
			cleanCpf.length !== 11 ||
			cleanCpf === "00000000000" ||
			cleanCpf === "11111111111" ||
			cleanCpf === "22222222222"
		) {
			return false;
		}

		// Validação de CPF
		let soma = 0;
		let resto: number;

		for (let i = 1; i <= 9; i++) {
			soma = soma + Number.parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);
		}

		resto = (soma * 10) % 11;
		if (resto === 10 || resto === 11) resto = 0;
		if (resto !== Number.parseInt(cleanCpf.substring(9, 10))) return false;

		soma = 0;
		for (let i = 1; i <= 10; i++) {
			soma = soma + Number.parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);
		}

		resto = (soma * 10) % 11;
		if (resto === 10 || resto === 11) resto = 0;
		if (resto !== Number.parseInt(cleanCpf.substring(10, 11))) return false;

		return true;
	};

	// Valida CNPJ
	const validateCNPJ = (cnpj: string) => {
		const cleanCnpj = cnpj.replace(/[^\d]+/g, "");

		if (
			cleanCnpj.length !== 14 ||
			cleanCnpj === "00000000000000" ||
			cleanCnpj === "11111111111111"
		) {
			return false;
		}

		// Validação do CNPJ
		let tamanho = cleanCnpj.length - 2;
		let numeros = cleanCnpj.substring(0, tamanho);
		const digitos = cleanCnpj.substring(tamanho);
		let soma = 0;
		let pos = tamanho - 7;

		for (let i = tamanho; i >= 1; i--) {
			soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
			if (pos < 2) pos = 9;
		}

		let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado !== Number.parseInt(digitos.charAt(0))) return false;

		tamanho = tamanho + 1;
		numeros = cleanCnpj.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;

		for (let i = tamanho; i >= 1; i--) {
			soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
			if (pos < 2) pos = 9;
		}

		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado !== Number.parseInt(digitos.charAt(1))) return false;

		return true;
	};

	// Valida telefone
	const validatePhone = (phone: string) => {
		const unmaskedPhone = phone.replace(/\D/g, "");
		return unmaskedPhone.length >= 10 && unmaskedPhone.length <= 11;
	};

	// Valida email
	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

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
				const isValid = validateCPF(unmaskedValue);
				setErrors({
					...errors,
					cpf: isValid ? "" : "CPF inválido",
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
				const isValid = validateCNPJ(unmaskedValue);
				setErrors({
					...errors,
					cnpj: isValid ? "" : "CNPJ inválido",
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
				const isValid = validatePhone(unmaskedValue);
				setErrors({
					...errors,
					phone: isValid ? "" : "Telefone inválido",
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
				const isValid = validateEmail(value);
				setErrors({
					...errors,
					email: isValid ? "" : "E-mail inválido",
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

		if (!formData.email.trim()) {
			setErrors({
				...errors,
				email: "E-mail é obrigatório",
				form: "Por favor, preencha seu e-mail",
			});
			return;
		}

		if (!formData.phone.trim()) {
			setErrors({
				...errors,
				phone: "Telefone é obrigatório",
				form: "Por favor, forneça um número de telefone",
			});
			return;
		}

		// Verifica e-mail
		if (!validateEmail(formData.email)) {
			setErrors({
				...errors,
				email: "E-mail inválido",
				form: "Por favor, forneça um e-mail válido",
			});
			return;
		}

		// Validação do CPF - agora obrigatório
		const unmaskedCPF = formData.cpf.replace(/\D/g, "");
		if (unmaskedCPF.length === 0) {
			setErrors({
				...errors,
				cpf: "CPF é obrigatório",
				form: "Por favor, forneça um CPF",
			});
			return;
		}
		if (unmaskedCPF.length !== 11 || !validateCPF(unmaskedCPF)) {
			setErrors({
				...errors,
				cpf: "CPF inválido",
				form: "Por favor, forneça um CPF válido",
			});
			return;
		}

		// Validação do CNPJ - agora obrigatório
		const unmaskedCNPJ = formData.cnpj.replace(/\D/g, "");
		if (unmaskedCNPJ.length === 0) {
			setErrors({
				...errors,
				cnpj: "CNPJ é obrigatório",
				form: "Por favor, forneça um CNPJ",
			});
			return;
		}
		if (unmaskedCNPJ.length !== 14 || !validateCNPJ(unmaskedCNPJ)) {
			setErrors({
				...errors,
				cnpj: "CNPJ inválido",
				form: "Por favor, forneça um CNPJ válido",
			});
			return;
		}

		// Validação do telefone
		const unmaskedPhone = formData.phone.replace(/\D/g, "");
		if (!validatePhone(unmaskedPhone)) {
			setErrors({
				...errors,
				phone: "Telefone inválido",
				form: "Por favor, forneça um número de telefone válido",
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
