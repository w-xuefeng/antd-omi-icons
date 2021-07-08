// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/es/asn/UsergroupAddOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-usergroup-add-outlined')
export default class UsergroupAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UsergroupAddOutlined';
  static tagName = 'o-usergroup-add-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UsergroupAddOutlinedSvg} />;
  };
}