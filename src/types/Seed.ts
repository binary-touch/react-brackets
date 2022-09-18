import { IRoundProps } from './Rounds';

export type ISeedProps = {
  id: number;
  teams: Array<{ name?: string; [key: string]: any }>;
  date?: string;
  mobileBreakpoint?: number;
  [key: string]: any;
};

export interface IRenderSeedProps<ISeed = ISeedProps> {
  seed: ISeed;
  breakpoint: number;
  roundIndex: number;
  seedIndex: number;
  rounds?: IRoundProps[];
}
