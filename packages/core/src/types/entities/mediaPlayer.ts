import type { HassEntityAttributeBase } from "home-assistant-js-websocket";

import type { MediaPlayerEntity as MediaPlayerEntityBase } from "../autogenerated-types-by-domain";

export enum MediaPlayerEntityState {
  PLAYING = "playing",
  PAUSED = "paused",
  IDLE = "idle",
  OFF = "off",
  ON = "on",
  BUFFERING = "buffering",
  UNAVAILABLE = "unavailable",
  UNKNOWN = "unknown",
  STANDBY = "standby",
}

export interface MediaPlayerEntity extends MediaPlayerEntityBase {
  attributes: MediaPlayerEntityAttributes;
  state: MediaPlayerEntityState;
}

export interface MediaPlayerEntityAttributes extends HassEntityAttributeBase {
  media_content_id?: string;
  media_content_type?: string;
  media_artist?: string;
  media_playlist?: string;
  media_series_title?: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  media_season?: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  media_episode?: any;
  app_name?: string;
  media_position_updated_at?: string | number | Date;
  media_duration?: number;
  media_position?: number;
  media_title?: string;
  icon?: string;
  entity_picture_local?: string;
  is_volume_muted?: boolean;
  volume_level?: number;
  source?: string;
  source_list?: string[];
  sound_mode?: string;
  sound_mode_list?: string[];
  repeat?: string;
  shuffle?: boolean;
  group_members?: string[];
  sync_group?: string[];
}