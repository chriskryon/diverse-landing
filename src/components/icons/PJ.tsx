import Image from 'next/image';
import type { ImageProps } from 'next/image';
import PJAccount from '../../../public/PJAccount.png';


export interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
}

const PJIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className = '',
  ...props
}) => {
  return (
    <Image
      src={PJAccount}
      alt="Conta Pessoa Jurídica"
      width={Number(width)}
      height={Number(height)}
      className={className}
      {...props}
    />
  );
};

export default PJIcon;
