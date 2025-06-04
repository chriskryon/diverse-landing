import Image from 'next/image';
import creditCard from '../../../public/creditCard.png';
import type { IconProps } from './PJ';
import ExclusiveProducts from './ExclusiveProducts';

const CreditCardIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
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
