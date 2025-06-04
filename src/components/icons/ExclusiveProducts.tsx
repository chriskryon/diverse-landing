import Image from 'next/image';
import exclusiveProductsImg from '../../../public/exclusiveProducts.png';
import type { IconProps } from './PJ';

const ExclusiveProductsIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
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
