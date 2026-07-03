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
  type: 
    | 'mission_control' 
    | 'team' 
    | 'introduction' 
    | 'problem_statement' 
    | 'system_overview'
    | 'mech_chassis' 
    | 'mech_powertrain' 
    | 'mech_steering' 
    | 'mech_traction' 
    | 'mech_structure'
    | 'elec_components' 
    | 'elec_controllers' 
    | 'elec_power' 
    | 'elec_bms' 
    | 'elec_wiring'
    | 'soft_static' 
    | 'soft_dynamic' 
    | 'soft_slam' 
    | 'soft_kalman' 
    | 'soft_fsm' 
    | 'soft_github';
  coordinates: SlideCoordinates;
  transitionType?: TransitionType;
}

export interface ExecutionLog {
  timestamp: string;
  type: 'info' | 'success' | 'error';
  message: string;
}
