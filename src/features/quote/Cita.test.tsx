import { screen, waitFor } from "@testing-library/react";
import { render } from "../../test/test-utils";
import userEvent from "@testing-library/user-event";
import Cita from "./Cita";

const setup = () => render(<Cita />);

describe("<Cita/>", () => {
  it("El componente debe renderizarse", () => {
    setup();
    expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
  });

  describe("El usuario ingresa nombres de personajes", () => {
    it("El usuario tipea incorrectamente", async () => {
      setup();
      userEvent.type(
        screen.getByRole("textbox", {
          name: /author cita/i,
        }),
        "1"
      );
      await userEvent.click(
        screen.getByRole("button", {
          name: /obtener cita/i,
        })
      );
      expect(
        await screen.findByText(/por favor ingrese un nombre válido/i)
      ).toBeInTheDocument();
    });
    it("El usuario apreta el boton de obtener cita aleatoria", async () => {
      setup();
      await userEvent.click(
        screen.getByRole("button", {
          name: /obtener cita aleatoria/i,
        })
      );
      expect(
        await screen.findByText(/obtener cita aleatoria/i)
      ).toBeInTheDocument();
    });
    it("El usuario ingresa el nombre homer", async () => {
      setup();
      await userEvent.type(
        screen.getByRole("textbox", {
          name: /author cita/i,
        }),
        "homer"
      );
      await userEvent.click(
        screen.getByRole("button", {
          name: /obtener cita/i,
        })
      );
      expect(screen.getByText(/CARGANDO.../i)).toBeInTheDocument();
      expect(
        await screen.findByRole("textbox", {
          name: /author cita/i,
        })
      ).toHaveValue("homer");
      await waitFor(
        () => {
          expect(screen.getByText("homer simpson")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });
  });
});
