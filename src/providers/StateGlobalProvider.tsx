import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type VersionOperation = {
  ios: string;
  android: string;
};

interface StateGlobalContextI {
  versionOperation: VersionOperation;
  hanldesetVersionOperation: (version: VersionOperation) => void;
}

const StateGlobalContextI = createContext<StateGlobalContextI>({
  versionOperation: { ios: "", android: "" },
  hanldesetVersionOperation: () => {},
});

export const useStateGlobal = () => useContext(StateGlobalContextI);

const StateGlobalProvider = ({ children }: { children: any }) => {
  //! State
  const [versionOperation, setVersionOperation] = useState<VersionOperation>({
    ios: "0",
    android: "0",
  });

  //! Function

  const hanldesetVersionOperation = useCallback((version: VersionOperation) => {
    setVersionOperation(version);
  }, []);

  //! Return
  const value = useMemo(() => {
    return {
      versionOperation,
      hanldesetVersionOperation,
    };
  }, [versionOperation, hanldesetVersionOperation]);

  return (
    <StateGlobalContextI.Provider value={value}>
      {children}
    </StateGlobalContextI.Provider>
  );
};

export default StateGlobalProvider;
