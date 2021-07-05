// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-translation-outlined')
export default class TranslationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TranslationOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TranslationOutlinedSvg}></AntdIcon>;
  };
}