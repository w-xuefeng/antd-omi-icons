// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MedicineBoxOutlinedSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-medicine-box-outlined')
export default class MedicineBoxOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MedicineBoxOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MedicineBoxOutlinedSvg}></AntdIcon>;
  };
}