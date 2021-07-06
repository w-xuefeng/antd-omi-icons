// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-medicine-box-two-tone')
export default class MedicineBoxTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MedicineBoxTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MedicineBoxTwoToneSvg}></AntdIcon>;
  };
}