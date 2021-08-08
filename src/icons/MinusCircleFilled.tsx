// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MinusCircleFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},"name":"minus-circle","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-minus-circle-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-minus-circle-filled')
export default class MinusCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusCircleFilled';
  static tagName = 'o-minus-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={MinusCircleFilledSvg} />;
  };
}