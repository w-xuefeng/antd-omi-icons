// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ant-design-outlined')
export default class AntDesignOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AntDesignOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AntDesignOutlinedSvg}></AntdIcon>;
  };
}