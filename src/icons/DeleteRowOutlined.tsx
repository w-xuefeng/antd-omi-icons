// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DeleteRowOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M819.8 512l102.4-122.9a8.06 8.06 0 00-6.1-13.2h-54.7c-2.4 0-4.6 1.1-6.1 2.9L782 466.7l-73.1-87.8a8.1 8.1 0 00-6.1-2.9H648c-1.9 0-3.7.7-5.1 1.9a7.97 7.97 0 00-1 11.3L744.2 512 641.8 634.9a8.06 8.06 0 006.1 13.2h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8a8.1 8.1 0 006.1 2.9h55c1.9 0 3.7-.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L819.8 512zM536 464H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h416c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-84 204h-60c-3.3 0-6 2.7-6 6v166H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h292c16.6 0 30-13.4 30-30V674c0-3.3-2.7-6-6-6zM136 184h250v166c0 3.3 2.7 6 6 6h60c3.3 0 6-2.7 6-6V142c0-16.6-13.4-30-30-30H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6z"}}]},"name":"delete-row","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-delete-row-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-delete-row-outlined')
export default class DeleteRowOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteRowOutlined';
  static tagName = 'o-delete-row-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={DeleteRowOutlinedSvg} />;
  };
}