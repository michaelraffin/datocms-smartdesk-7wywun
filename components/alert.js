import Container from "./container";
import cn from "classnames";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Submit your preferred design with us @{" "}
              <a
                href="https://www.smartdeskph.com/"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Store
              </a>{" "}
            </>
          ) : (
            <>
              Submit your preferred design with us @{" "}
              <a
                href="https://www.smartdeskph.com/"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Store
              </a>{" "}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
