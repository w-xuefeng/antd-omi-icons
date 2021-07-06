// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsergroupDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-usergroup-delete-outlined')
export default class UsergroupDeleteOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UsergroupDeleteOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UsergroupDeleteOutlinedSvg}></AntdIcon>;
  };
}