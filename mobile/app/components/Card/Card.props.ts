import { GameType } from "../../features/Home/Screens/Home";
import { ScoresType } from "../../features/Home/Screens/Home";

export interface CardProps {
  data: GameType;
  onSubmitEditing: (scores: ScoresType, gameId: string) => Promise<void>;
}
