// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MedicineBoxFilledSvg from '@ant-design/icons-svg/es/asn/MedicineBoxFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-medicine-box-filled')
export default class MedicineBoxFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MedicineBoxFilled';
  static tagName = 'o-medicine-box-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MedicineBoxFilledSvg} />;
  };
}