import java.awt.*;
import java.awt.event.InputEvent;

public class robot {
    public static void main(String[] args) {
        try {
            // Crea un objeto Robot
            java.awt.Robot robot = new java.awt.Robot();

            // Haz que el Robot espere 5 segundos antes de empezar
            robot.delay(5000);

            // Entra en un ciclo infinito
            while(true) {
                // Mueve el mouse a la posición (100, 100)
                robot.mouseMove(100, 100);

                // Presiona el botón izquierdo del mouse
                robot.mousePress(InputEvent.BUTTON1_DOWN_MASK);

                // Libera el botón izquierdo del mouse
                robot.mouseRelease(InputEvent.BUTTON1_DOWN_MASK);

                // Haz que el Robot espere 10 segundos antes de repetir
                robot.delay(10000);
            }

        } catch (AWTException e) {
            e.printStackTrace();
        }
    }
}
