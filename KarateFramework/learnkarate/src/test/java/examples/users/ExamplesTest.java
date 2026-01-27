package examples.users;
//import com.intuit.karate.junit4.Karate;
//import org.junit.runner.RunWith;
//package examples.users;
import com.intuit.karate.junit5.Karate;


class ExampleTest {

    @Karate.Test
    Karate testAll() {
        return Karate.run().relativeTo(getClass());
   }
}

//@RunWith(Karate.class)
//public class ExamplesTest {

//}









