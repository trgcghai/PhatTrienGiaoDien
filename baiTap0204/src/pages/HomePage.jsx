import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div>
      <div>
        <div>
          <FontAwesomeIcon icon={faFile} />
          <p>Detailed report</p>
        </div>

        <div>
          <button>Import</button>
          <button>Export</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
