import React, { useEffect } from "react";
import { Reaplay, PlayerType } from "reaplay";
import {
	CgPlayTrackPrev,
	CgPlayButton,
	CgPlayPause,
	CgPlayTrackNext,
} from "react-icons/cg";
import { TbRepeat, TbRepeatOff, TbVolume, TbVolumeOff } from "react-icons/tb";

interface props {
	songSrc: [string];
	metadata: [{ name: string; artist?: string; album?: string }];
}

const AudioPlayer = ({ songSrc, metadata }: props) => {
	return (
		<Reaplay tracks={songSrc}>
			{(player: PlayerType) => {
				return (
					<>
						<h1 className="track-name">
							{metadata[player.trackIndex].name}
						</h1>
						<h3 className="track-artist">
							{metadata[player.trackIndex]?.artist}
						</h3>
						<div className="w-full px-4 rounded-md flex gap-4 h-8 items-center justify-around gap-4">
							<div className="my-2 gap-2 track-actions items-center justify-between">
								<button
									className="p-1 rounded-full  hover:bg-slate-500"
									onClick={() => player.toPrevTrack()}
								>
									<CgPlayTrackPrev className="h-8 w-8" />
								</button>
								<button
									className="p-1 rounded-full hover:bg-slate-500"
									onClick={() =>
										player.setIsPlaying(
											player.isPlaying ? false : true
										)
									}
								>
									{player.isPlaying ? (
										<CgPlayPause className="h-8 w-8" />
									) : (
										<CgPlayButton className="h-8 w-8" />
									)}
								</button>
								<button
									className="p-1 rounded-full  hover:bg-slate-500"
									onClick={() => player.toNextTrack()}
								>
									<CgPlayTrackNext className="h-8 w-8" />
								</button>
								<button
									className="p-1 rounded-full hover:bg-slate-500"
									onClick={() => {
										player.isRepeat
											? player.repeat(false)
											: player.repeat(true);
									}}
								>
									{player.isRepeat ? (
										<TbRepeat className="h-4 w-4" />
									) : (
										<TbRepeatOff className="h-4 w-4" />
									)}
								</button>
							</div>

							<p className="track-album">
								{metadata[player.trackIndex]?.album}
							</p>

							<div className="track-progress bg-black">
								<p>{player.trackProgressText}</p>
								<input
									type="range"
									value={player.trackProgress}
									step="1"
									min="0"
									max={
										player.duration
											? player.duration
											: `${player.duration}`
									}
									className="progress bg-black rounded-lg p-0  w-full "
									onChange={(e) =>
										player.onScrub(e.target.value)
									}
									onMouseUp={(e) => player.onScrubEnd(e)}
									onKeyUp={(e) => player.onScrubEnd(e)}
								/>
								<p>{player.durationText}</p>
							</div>

							<div className="track-volume mx-4">
								<p>{player.volume}</p>
								<input
									type="range"
									value={player.volume}
									step="1"
									min="0"
									max="100"
									onChange={(e) =>
										player.setVolume(+e.target.value)
									}
									className="volume-range mx-2"
								/>
								<button
									onClick={() => {
										player.isMute
											? player.unmute()
											: player.mute();
									}}
									style={{ padding: "5px" }}
								>
									{player.isMute ? (
										<TbVolumeOff className="h-6 w-6" />
									) : (
										<TbVolume className="h-6 w-6" />
									)}
								</button>
							</div>
						</div>
					</>
				);
			}}
		</Reaplay>
	);
};

export default AudioPlayer;
