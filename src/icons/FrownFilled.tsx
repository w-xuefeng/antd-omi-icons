// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FrownFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 01-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 01-8 8.4zm24-224a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},"name":"frown","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-frown-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-frown-filled')
export default class FrownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FrownFilled';
  static tagName = 'o-frown-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FrownFilledSvg} />;
  };
}