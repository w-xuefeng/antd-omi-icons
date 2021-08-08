// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileMarkdownFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.97a16 16 0 0014.62 9.5h24.06a16 16 0 0014.63-9.51l59.1-133.35V758a16 16 0 0016.01 16H641a16 16 0 0016-16V486a16 16 0 00-16-16h-34.75a16 16 0 00-14.67 9.62L512.1 662.2l-79.48-182.59a16 16 0 00-14.67-9.61H383a16 16 0 00-16 16v272a16 16 0 0016 16h27.13a16 16 0 0016-16V600.93z"}}]},"name":"file-markdown","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-file-markdown-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-file-markdown-filled')
export default class FileMarkdownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileMarkdownFilled';
  static tagName = 'o-file-markdown-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FileMarkdownFilledSvg} />;
  };
}