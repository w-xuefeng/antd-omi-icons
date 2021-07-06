// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DropboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dropbox-circle-filled')
export default class DropboxCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DropboxCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DropboxCircleFilledSvg}></AntdIcon>;
  };
}