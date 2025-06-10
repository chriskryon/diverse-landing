import Image from 'next/image';
import creditCard from '../../../public/creditCard.png';
import type { IconProps } from './PJ';

const CreditCardIcon: React.FC<IconProps> = ({
  width = 48,
  height = 48,
  className = '',
  ...props
}) => {
  return (
    <Image
      src={creditCard}
      alt="Cartão de Crédito"
      width={Number(width)}
      height={Number(height)}
      className={className}
      {...props}
    />
  );
};

export default CreditCardIcon;
