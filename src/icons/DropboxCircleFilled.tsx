// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DropboxCircleFilledSvg from '@ant-design/icons-svg/es/asn/DropboxCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dropbox-circle-filled')
export default class DropboxCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DropboxCircleFilled';
  static tagName = 'o-dropbox-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DropboxCircleFilledSvg} />;
  };
}