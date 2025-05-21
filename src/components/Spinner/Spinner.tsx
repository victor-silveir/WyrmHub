import { JSX } from "react";
import * as S from "./Spinner.style";

interface SpinnerProps<T> {
  isLoading: boolean;
}

const Spinner = <T,>({ isLoading }: SpinnerProps<T>): JSX.Element => {
  return <>{isLoading && <S.Loader src="/assets/dragon-spinner.png" alt="Loading..." />}</>;
};

export default Spinner;
