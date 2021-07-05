// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MediumSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MediumSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-medium-square-filled')
export default class MediumSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MediumSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MediumSquareFilledSvg}></AntdIcon>;
  };
}