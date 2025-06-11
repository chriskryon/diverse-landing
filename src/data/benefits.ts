import { CreditCardIcon } from "lucide-react"
import BetaVersionIcon from "../components/icons/BetaVersion"
import ExclusiveProductsIcon from "../components/icons/ExclusiveProducts"
import GeneralIcon from "../components/icons/General"
import PJIcon from "../components/icons/PJ"
import PixIcon from "../components/icons/Pix"
import PayAndReceiveIcon from "../components/icons/PayAndReceive"
import TransferIcon from "../components/icons/Transfer"
import InsuranceIcon from "../components/icons/Insurance"

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title?: string;
  text: string;
  color: string;
}

export const benefits: Benefit[] = [
    {
      icon: GeneralIcon,
      title: "Para Geral",
      text: "Trazemos a diversidade para o centro, formando serviços acolhedores para todo mundo.",
      color: "text-yellow-400",
    },
    {
      icon: PJIcon,
      title: "Conta Pessoa Jurídica",
      text: "te falei? também ofereço a modalidade de conta jurídica.",
      color: "text-pink-500",
    },
    {
      icon: ExclusiveProductsIcon,
      title: "Produtos Exclusivos",
      text: "Em breve, vou trazer produtos exclusivos para te ajudar no dia a dia.",
      color: "text-yellow-400",
    },
    {
      icon: BetaVersionIcon,
      title: "Versão Beta",
      text: "Estou na minha primeira versão, valeu por estar aqui e me ajudar a melhorar.",
      color: "text-pink-500",
    },
    {
      icon: CreditCardIcon,
      title: "Cartão de Crédito",
      text: "Ainda estou preparando um cartão de crédito mara.",
      color: "text-yellow-400",
    },
  ]

  export const features = [
    {
      icon: PixIcon,
      text: "Área Pix",
      color: "text-yellow-400",
    },
    {
      icon: PayAndReceiveIcon,
      text: "Pagar e Receber",
      color: "text-pink-500",
    },
    {
      icon: TransferIcon,
      text: "Transferir",
      color: "text-yellow-400",
    },
    {
      icon: InsuranceIcon,
      text: "Seguros",
      color: "text-yellow-400",
    },
  ]