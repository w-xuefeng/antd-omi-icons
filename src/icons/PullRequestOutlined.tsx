// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PullRequestOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M788 705.9V192c0-8.8-7.2-16-16-16H602v-68.8c0-6-7-9.4-11.7-5.7L462.7 202.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V240h114v465.9c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c.1-49.2-31.7-91-75.9-106.1zM752 860a48.01 48.01 0 010-96 48.01 48.01 0 010 96zM384 212c0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1V318.1c44.2-15.1 76-56.9 76-106.1zm-160 0a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0z"}}]},"name":"pull-request","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-pull-request-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-pull-request-outlined')
export default class PullRequestOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PullRequestOutlined';
  static tagName = 'o-pull-request-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={PullRequestOutlinedSvg} />;
  };
}