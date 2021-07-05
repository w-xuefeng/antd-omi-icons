// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-medicine-box-filled')
export default class MedicineBoxFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MedicineBoxFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MedicineBoxFilledSvg}></AntdIcon>;
  };
}