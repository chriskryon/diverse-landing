import Image from 'next/image';
import exclusiveProductsImg from '../../../public/exclusiveProducts.png';
import type { IconProps } from './PJ';

const ExclusiveProductsIcon: React.FC<IconProps> = ({
  width = 48,
  height = 48,
  className = '',
  ...props
}) => {
  return (
    <Image
      src={exclusiveProductsImg}
      alt="Exclusive Products"
      width={Number(width)}
      height={Number(height)}
      className={className}
      {...props}
    />
  );
};

export default ExclusiveProductsIcon;
