import { useState, useEffect, useCallback, useRef } from "react";
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

/**
 * Hook de debounce que atrasa a atualização de um valor
 * Evita processamento excessivo durante digitação rápida
 */
function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	// Espera o usuário parar de digitar antes de atualizar o valor
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Limpa o timer anterior se um novo valor chegar
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
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

	// Aplica debounce para evitar validações em cada tecla pressionada
	const debouncedFormData = useDebounce(formData, 300);

	// Simplified validation effect
	useEffect(() => {
		if (!isOpen) return;

		// Use an object to check all fields at once
		const validations = {
			name: debouncedFormData.name.trim().length > 0,
			email: validateEmail(debouncedFormData.email),
			phone: validatePhone(debouncedFormData.phone),
			cpf: validateCPF(debouncedFormData.cpf),
			cnpj: validateCNPJ(debouncedFormData.cnpj),
		};

		// All fields must be valid
		setIsFormValid(Object.values(validations).every(Boolean));
	}, [debouncedFormData, isOpen]);

	// Refactored handleChange with more concise implementation
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			let processedValue = value;
			let shouldValidate = false;
			let validationSchema = null;

			// Apply masks according to field type
			switch (name) {
				case "cpf":
					processedValue = maskCPF(value);
					const unmaskedCpf = processedValue.replace(/\D/g, "");
					shouldValidate = unmaskedCpf.length === 11;
					validationSchema = cpfSchema;
					break;
				case "cnpj":
					processedValue = maskCNPJ(value);
					const unmaskedCnpj = processedValue.replace(/\D/g, "");
					shouldValidate = unmaskedCnpj.length === 14;
					validationSchema = cnpjSchema;
					break;
				case "phone":
					processedValue = maskPhone(value);
					const unmaskedPhone = processedValue.replace(/\D/g, "");
					shouldValidate = unmaskedPhone.length > 0;
					validationSchema = phoneSchema;
					break;
				case "email":
					shouldValidate = value.length > 0;
					validationSchema = emailSchema;
					break;
			}

			// Update formData
			setFormData((prev) => ({ ...prev, [name]: processedValue }));

			// Validate if necessary
			if (shouldValidate && validationSchema) {
				const result = validationSchema.safeParse(processedValue);
				setErrors((prev) => ({
					...prev,
					[name]:
						result.success
							? ""
							: `${name.charAt(0).toUpperCase() + name.slice(1)} inválido`,
				}));
			} else if (name === "name" || !shouldValidate) {
				setErrors((prev) => ({ ...prev, [name]: "" }));
			}
		},
		[],
	);

	// Optimized handleSubmit with reduced duplication
	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault();

			// Validate all fields at once
			const validations = [
				{
					field: "name",
					value: formData.name.trim(),
					schema: null,
					message: "Por favor, preencha seu nome completo",
				},
				{
					field: "email",
					value: formData.email,
					schema: emailSchema,
					message: "Por favor, forneça um e-mail válido",
				},
				{
					field: "phone",
					value: formData.phone,
					schema: phoneSchema,
					message: "Por favor, forneça um número de telefone válido",
				},
				{
					field: "cpf",
					value: formData.cpf,
					schema: cpfSchema,
					message: "Por favor, forneça um CPF válido",
				},
				{
					field: "cnpj",
					value: formData.cnpj,
					schema: cnpjSchema,
					message: "Por favor, forneça um CNPJ válido",
				},
			];

			// Check required fields
			for (const validation of validations) {
				if (
					!validation.value ||
					(validation.schema &&
						!validation.schema.safeParse(validation.value).success)
				) {
					setErrors((prev) => ({
						...prev,
						[validation.field]:
							validation.field === "name"
								? ""
								: `${validation.field.charAt(0).toUpperCase() + validation.field.slice(1)} inválido`,
						form: validation.message,
					}));
					return;
				}
			}

			try {
				setIsSubmitting(true);

				// Send to server action
				const result = await submitFormData({
					name: formData.name,
					cpf: formData.cpf,
					cnpj: formData.cnpj,
					email: formData.email,
					phone: formData.phone,
				});

				if (result.error) {
					setErrors((prev) => ({ ...prev, form: result.error }));
				} else {
					// Success
					setSuccess(true);
					// Clear form
					setFormData({
						name: "",
						cpf: "",
						cnpj: "",
						email: "",
						phone: "",
					});
					setErrors({ cpf: "", cnpj: "", phone: "", email: "", form: "" });

					// Optional: close modal after success
					setTimeout(() => {
						onClose();
						setSuccess(false);
					}, 3000);
				}
			} catch (error) {
				setErrors((prev) => ({
					...prev,
					form: "Erro ao enviar o formulário. Tente novamente.",
				}));
			} finally {
				setIsSubmitting(false);
			}
		},
		[formData, onClose],
	);

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
