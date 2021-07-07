// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-snippets-filled')
export default class SnippetsFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SnippetsFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SnippetsFilledSvg} />;
  };
}