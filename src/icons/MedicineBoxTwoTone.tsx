// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-medicine-box-two-tone')
export default class MedicineBoxTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MedicineBoxTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MedicineBoxTwoToneSvg} />;
  };
}