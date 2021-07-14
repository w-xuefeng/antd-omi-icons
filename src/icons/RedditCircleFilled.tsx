// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const RedditCircleFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M584 548a36 36 0 1072 0 36 36 0 10-72 0zm144-108a35.9 35.9 0 00-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 00728 440zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm245 477.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 01296 404c27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 01101.6 25.6c0 29.8-24.2 54-54 54-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8zm-171.3 83c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 00-30.1-3.6zM296 440a35.98 35.98 0 00-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 00296 440zm72 108a36 36 0 1072 0 36 36 0 10-72 0z"}}]},"name":"reddit-circle","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-reddit-circle-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-reddit-circle-filled')
export default class RedditCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RedditCircleFilled';
  static tagName = 'o-reddit-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={RedditCircleFilledSvg} />;
  };
}