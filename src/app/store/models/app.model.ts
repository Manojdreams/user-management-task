import { UserAdd } from './users.model';

export interface FeatureState {
  readonly users: Array<UserAdd>
}

export interface AppState {
  feature: FeatureState;
}



