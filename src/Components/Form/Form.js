import "./form.scss";
import React from "react";

export default function Form({
  age, 
  setAge,
  actor,
  setActor,
  actors,
  occupation,
  setOccupation,
  occupations,
  styles,
  setCurrentStyle,
  currentStyle,
  setName,
  episodes,
  setCurrentEpisode,
  currentEpisode,
}) {
  const hairStyleOptions = styles.map((style) => (
    <option key={Math.random() * 100} value={style}>
      {style}
    </option>
  ));

  const possibleOccupations = occupations.map((occupation) => (
    <option key={Math.random() * 100} value={occupation}>
      {occupation}
    </option>
  ));

  const voiceActors = actors.map((actor) => (
    <option value={actor} key={Math.random() * 100} name={actor}>
      {actor}
    </option>
  ));

  const seasonAndEpisodeOptions = () => {
    let seasons = episodes.reduce((seasons, episode) => {
      if (!seasons.includes(episode.season)) {
        seasons.push(episode.season);
        return seasons;
      }
      return seasons;
    }, []);

    const seasonEpisodes = (season) => {
      return episodes
        .filter((episode) => episode.season === season)
        .map((episode) => (
          <option
            value={episode.name}
            key={Math.random() * 100}
            name={episode.name}
          >
            {episode.name}
          </option>
        ));
    };

    const output = seasons.map((season) => {
      return (
        <optgroup key={season} label={`Season ${season}`}>
          {seasonEpisodes(season)}
        </optgroup>
      );
    });

    return output;
  };

  return (
    <form>
      <input
        className="input-text"
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        name="name"
      ></input>

      <input
        value={age ? age : ''}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        type="number"
        name="age"
      ></input>

      <select
        className="input-text"
        value={currentEpisode ? currentEpisode : ""}
        name="first episode"
        onChange={(e) => setCurrentEpisode(e.target.value)}
      >
        {seasonAndEpisodeOptions()}
        <option value="">Episode First Appeared</option>
      </select>
      <select
        value={actor ? actor : ""}
        name="voice actor"
        onChange={(e) => setActor(e.target.value)}
      >
        <option value="">Voice Actor</option>
        {voiceActors}
      </select>

      <select
        value={occupation ? occupation : ""}
        onChange={(e) => setOccupation(e.target.value)}
        name="occupation"
      >
        <option value="">Occupation</option>
        {possibleOccupations}
      </select>
      <select
        value={currentStyle ? currentStyle : ""}
        size="multiple"
        name="hair styles"
        onChange={(e) => setCurrentStyle(e.target.value)}
      >
        <option value="">Hair Styles</option>
        {hairStyleOptions}
      </select>
    </form>
  );
}
