/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TransitionType = 'spring' | 'smooth' | 'snappy' | 'slow' | 'bouncy' | 'linear' | 'zoom';

export interface SlideCoordinates {
  x: number;
  y: number;
  scale: number;
  rotate: number; // in degrees
}

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  type: 'mission_control' | 'metrics' | 'team' | 'perception' | 'power' | 'architecture';
  coordinates: SlideCoordinates;
  transitionType?: TransitionType;
}

export interface ExecutionLog {
  timestamp: string;
  type: 'info' | 'success' | 'error';
  message: string;
}
