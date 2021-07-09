// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileExclamationFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 784a40 40 0 100-80 40 40 0 000 80zm32-152V448a8 8 0 00-8-8h-48a8 8 0 00-8 8v184a8 8 0 008 8h48a8 8 0 008-8z"}}]},"name":"file-exclamation","theme":"filled"};

@tag('o-file-exclamation-filled')
export default class FileExclamationFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExclamationFilled';
  static tagName = 'o-file-exclamation-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileExclamationFilledSvg} />;
  };
}