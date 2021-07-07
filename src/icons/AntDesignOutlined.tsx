// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ant-design-outlined')
export default class AntDesignOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AntDesignOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AntDesignOutlinedSvg} />;
  };
}