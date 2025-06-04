import { z } from "zod";

// Email validation schema
export const emailSchema = z
	.string()
	.email("E-mail inválido")
	.min(1, "E-mail é obrigatório");

// Phone validation schema
export const phoneSchema = z.string().refine(
	(value) => {
		const digits = value.replace(/\D/g, "");
		return digits.length >= 10 && digits.length <= 11;
	},
	{ message: "Telefone inválido" },
);

// CPF validation schema
export const cpfSchema = z
	.string()
	.refine(
		(value) => {
			const digits = value.replace(/\D/g, "");
			return digits.length === 11;
		},
		{ message: "CPF deve ter 11 dígitos" },
	)
	.refine(
		(value) => {
			const digits = value.replace(/\D/g, "");

			if (
				digits === "00000000000" ||
				digits === "11111111111" ||
				digits === "22222222222" ||
				digits === "33333333333" ||
				digits === "44444444444" ||
				digits === "55555555555" ||
				digits === "66666666666" ||
				digits === "77777777777" ||
				digits === "88888888888" ||
				digits === "99999999999"
			) {
				return false;
			}

			let sum = 0;
			for (let i = 1; i <= 9; i++) {
				sum += Number.parseInt(digits.substring(i - 1, i)) * (11 - i);
			}

			let remainder = (sum * 10) % 11;
			if (remainder === 10 || remainder === 11) remainder = 0;
			if (remainder !== Number.parseInt(digits.substring(9, 10))) return false;

			// Second verification digit
			sum = 0;
			for (let i = 1; i <= 10; i++) {
				sum += Number.parseInt(digits.substring(i - 1, i)) * (12 - i);
			}

			remainder = (sum * 10) % 11;
			if (remainder === 10 || remainder === 11) remainder = 0;
			if (remainder !== Number.parseInt(digits.substring(10, 11))) return false;

			return true;
		},
		{ message: "CPF inválido" },
	);

// CNPJ validation schema
export const cnpjSchema = z
	.string()
	.refine(
		(value) => {
			const digits = value.replace(/\D/g, "");
			return digits.length === 14;
		},
		{ message: "CNPJ deve ter 14 dígitos" },
	)
	.refine(
		(value) => {
			const digits = value.replace(/\D/g, "");

			if (
				digits === "00000000000000" ||
				digits === "11111111111111" ||
				digits === "22222222222222"
			) {
				return false;
			}

			// First verification digit
			let size = digits.length - 2;
			let numbers = digits.substring(0, size);
			const digitVerifiers = digits.substring(size);
			let sum = 0;
			let pos = size - 7;

			for (let i = size; i >= 1; i--) {
				sum += Number.parseInt(numbers.charAt(size - i)) * pos--;
				if (pos < 2) pos = 9;
			}

			let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
			if (result !== Number.parseInt(digitVerifiers.charAt(0))) return false;

			// Second verification digit
			size = size + 1;
			numbers = digits.substring(0, size);
			sum = 0;
			pos = size - 7;

			for (let i = size; i >= 1; i--) {
				sum += Number.parseInt(numbers.charAt(size - i)) * pos--;
				if (pos < 2) pos = 9;
			}

			result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
			if (result !== Number.parseInt(digitVerifiers.charAt(1))) return false;

			return true;
		},
		{ message: "CNPJ inválido" },
	);

// Masking functions
export const maskCPF = (value: string): string => {
	return value
		.replace(/\D/g, "") // Remove caracteres não numéricos
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d{1,2})/, "$1-$2")
		.replace(/(-\d{2})\d+?$/, "$1"); // Limita a 11 dígitos
};

export const maskCNPJ = (value: string): string => {
	return value
		.replace(/\D/g, "")
		.replace(/(\d{2})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d)/, "$1/$2")
		.replace(/(\d{4})(\d{1,2})/, "$1-$2")
		.replace(/(-\d{2})\d+?$/, "$1"); // Limita a 14 dígitos
};

export const maskPhone = (value: string): string => {
	return value
		.replace(/\D/g, "")
		.replace(/^(\d{2})(\d)/g, "($1) $2")
		.replace(/(\d)(\d{4})$/, "$1-$2")
		.replace(/(\d{5}-\d{4})\d+?$/, "$1"); // Limita a 11 dígitos
};

// Validation helper functions
export const validateCPF = (cpf: string): boolean => {
	const result = cpfSchema.safeParse(cpf);
	return result.success;
};

export const validateCNPJ = (cnpj: string): boolean => {
	const result = cnpjSchema.safeParse(cnpj);
	return result.success;
};

export const validatePhone = (phone: string): boolean => {
	const result = phoneSchema.safeParse(phone);
	return result.success;
};

export const validateEmail = (email: string): boolean => {
	const result = emailSchema.safeParse(email);
	return result.success;
};
