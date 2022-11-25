import { AudioPlayer as AP } from '@discordjs/voice';
import { AutoPlay, LoopMode, PlatformType } from "./../typings/enums";
import { AudioPlayerMode, AudioPLayerOptions } from "./../typings/interfaces";
import { LocalFileTrackInfo, SoundCloudTrackInfo, SpotifyTrackInfo, Track, UrlTrackInfo, YoutubeTrackInfo } from "../typings/types";
import { GuildMember } from "discord.js";
export declare class AudioPlayer {
    #private;
    options: AudioPLayerOptions;
    queue: Track<keyof typeof PlatformType>[];
    player: AP;
    constructor(options: AudioPLayerOptions);
    defaultMode(): AudioPlayerMode;
    play(): Promise<void>;
    _loopQueue(): Promise<void>;
    _playNext(): Promise<void>;
    _destroy(): void;
    _configPlayer(): void;
    add(track: string[], type: PlatformType, member: GuildMember): Promise<void>;
    skip(): boolean;
    skipTo(position: number): void;
    pause(): boolean;
    resume(): boolean;
    set volume(volume: number);
    get volume(): number;
    set loop(loop: LoopMode);
    get loop(): LoopMode;
    set autoPlay(autoPlay: AutoPlay);
    get autoPlay(): AutoPlay;
    shuffle(): void;
    unshuffle(): void;
    isShuffled(): boolean;
    isPaused(): boolean;
    isLoopEnabled(): boolean;
    isAutoPlayEnabled(): boolean;
    currentPosition(): number;
    getTrackCurrentDuration(): number;
    get currentTrack(): SoundCloudTrackInfo | LocalFileTrackInfo | UrlTrackInfo | YoutubeTrackInfo | SpotifyTrackInfo;
    get previousTrack(): SoundCloudTrackInfo | LocalFileTrackInfo | UrlTrackInfo | YoutubeTrackInfo | SpotifyTrackInfo;
    updateFilters(filterArr: string[]): void;
    playPrevious(): Promise<void>;
    setFilters(filterArr: string[]): void;
    removeFilters(): void;
    get filters(): string[];
    get seek(): boolean;
    seeked(seek: boolean): void;
    setFiltering(type: boolean): void;
    autoPlayNext(): Promise<void>;
    __configConnection(): void;
    getQueue(page?: number, limit?: number, format?: string): string[];
    getPing(type?: 'ws' | 'udp'): number;
}
