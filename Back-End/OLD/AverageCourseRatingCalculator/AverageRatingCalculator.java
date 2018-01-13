import java.util.Scanner;  
import java.io.FileReader;
import java.io.IOException;
import java.io.*;
import java.applet.*;
import java.awt.*;
import java.awt.event.*;

/***********************************************************************
 * @author Will LeVine
 * FourYearCalculator
 * 
 * This program creates a column of an array for each JHU course, 
 * including its code, its instructor, and its rating. You can also find
 * out this information about the course
 ***********************************************************************/

public class AverageRatingCalculator {

/***********************************************************************
 * the number of courses the array will contain.
 ***********************************************************************/
   private static final int numCourses = 90000;
   
/***********************************************************************
 * the number of descriptions each course will have.
 ***********************************************************************/
   private static final int numDescriptions = 4;

/***********************************************************************
 * the array containing all of the information about a course. 
 ***********************************************************************/
   private static String[][] courses = new String[numDescriptions][numCourses];
   
   
/***********************************************************************
 * testAllUpperCase - Tests if a string contains only upper case 
 * characters.
 * @param str - the string being tested
 * @return - true if it is all uppercase, false otherwise
 ***********************************************************************/
   public static boolean testAllUpperCase(String str) {
      for (int i = 0; i < str.length(); i++) {
         char c = str.charAt(i);
         if (c >= 97 && c <= 122) {
            return false;
         }
      }
      return true;
   }   
   
/***********************************************************************
 * containsAll - Tests if a string contains every word in an input 
 * string.
 * @param contain - the words you want to check if are contained
 * @param bigger - the "container"
 * @return - true if bigger contains all of contain, false otherwise
 ***********************************************************************/
   
   public static boolean containsAll(String bigger, String contain) {
      boolean result = true; 
      Scanner read = new Scanner(contain); 
      while (read.hasNext()) { 
         if (!bigger.contains(read.next())) { 
            return false; 
         }
      }
         
      return result;
   }
   
 /***********************************************************************
 * generateCourseMatrix - Reads/stores the data of each course in the 
 * courses array, with each column denoting one specific class, and the 
 * row denoting the specific description (row 0 = course code, row 1 = 
 * course name, row 2 = course instructor, row 3 = course rating).
 *
 * @return - the matrix of info about courses
 ***********************************************************************/

   public static String[][] generateCourseMatrix() throws IOException {
      Scanner userRead = new Scanner(System.in);
      
      FileReader inputReader = new FileReader("PastRatings.txt");
      Scanner readIn = new Scanner(inputReader);
      int i = 0; 
      String temp = readIn.nextLine();
      while (i < numCourses) { 
         if (readIn.hasNext()) { 
            if (temp.length() >= 3) { 
               if (temp.contains("AS.") || temp.contains("EN.")) { 
                  if (temp.charAt(0) == 'E' || temp.charAt(0) == 'A') { 
                     courses[0][i] = temp; //the course code
                  }
                  else {
                     temp = temp.substring(1);
                     courses[0][i] = temp; //the course code
                  }
               }
            }
         }
         if (readIn.hasNext()) { 
            temp = readIn.nextLine(); 
            while (temp.length() < numDescriptions || testAllUpperCase(temp)) { 
               temp = readIn.nextLine();
            }
            if (temp.length() >= numDescriptions) {
               courses[1][i] = temp; //the course name 
            }
         }
         if (readIn.hasNext()) { 
            temp = readIn.nextLine(); 
            while (temp.length() < numDescriptions || testAllUpperCase(temp)) { 
               temp = readIn.nextLine();
            }
            if (temp.length() >= numDescriptions) {
               courses[2][i] = temp; //the instructor name 
            }
         }
         if (readIn.hasNext()) { 
            temp = readIn.nextLine();
            while (!temp.contains("Summary") && !temp.contains("comments")) { 
               if (temp.length() >= numDescriptions 
                  && (temp.contains("Overall"))) {
                  int index = temp.indexOf(':'); 
                  temp = temp.substring(index + 2, index + 5);
                  courses[3][i] = temp; //the course rating 
               }
               else {
                  temp = readIn.nextLine();
               }
            }
         }
         i++;
         while (readIn.hasNext() && (!(temp.contains("EN.") //skips all the text between classes
               || (temp.contains("AS."))))) { 
            if (temp.length() < 3 || testAllUpperCase(temp)) { 
               temp = readIn.nextLine();
            }
            else if (!((temp.substring(0, 3).equals("EN.")) 
               || (temp.substring(0, 3).equals("AS."))
               || (temp.substring(0, 3).equals(" AS"))
               || (temp.substring(0, 3).equals(" EN")))) { 
               temp = readIn.nextLine(); 
            } 
         }
      }
      
      return courses;
   }
   
/***********************************************************************
 * main - start of execution. tell you the average course rating of 
 * courses (teacher-specific functionality)
 *
 * @param args - not used
 * @throws IOException - import file exceptions 
 ***********************************************************************/

   public static void main(String[] args) throws IOException {  
      courses = generateCourseMatrix();
      int count = 0;
      double sum = 0; 
      double avg = 0;
      String dontknow = "";
      String specificCourseCode = "";
      Scanner stdIn = new Scanner(System.in); 
      System.out.print("Do you know the course code?(y/n) ");
      String response = stdIn.nextLine();
      while (!(response.equals("y") || response.equals("n"))) { 
         System.out.print("That wasn't valid. Do you know the course code?(y/n) ");
         response = stdIn.nextLine();
      }
      if (response.equals("y")) { //if they know the course code
         System.out.print("What is the course code? ");
         specificCourseCode = stdIn.nextLine(); 
      }
      else if (response.equals("n")) {
         System.out.print("What is the course name? "); //if they don't know the course code
         String specificCourseName = stdIn.nextLine();
         for (int column = 0; column < numCourses; column++) { 
            if (courses[0][column] != null) { //print out all the courses containing the course name
               if (containsAll(courses[1][column], specificCourseName) && !containsAll(dontknow, courses[0][column].substring(0, 10))) {  
                  dontknow += courses[0][column] + " --- ";
                  dontknow += courses[1][column];
                  dontknow += "\n";
               }
            }
         }
         System.out.print(dontknow);
         System.out.print("Search through the above courses. What is the course code? ");
         specificCourseCode = stdIn.next(); 
      }
      System.out.print("Do you want to search for a specific teacher? (y/n)");
      String in = stdIn.next();
      String specificTeacher;
      if (in.equals("y")) {
         System.out.print("What is the teacher's last name? ");
         specificTeacher = stdIn.next();
      }
      else {
         specificTeacher ="";
      }
      for (int column = 0; column < numCourses; column++) { 
         if (courses[0][column] != null) { 
            if (containsAll(courses[0][column], specificCourseCode) && containsAll(courses[2][column], specificTeacher)) { 
               for (int row = 0; row < numDescriptions; row++) { 
                  System.out.print(courses[row][column] + " --- ");
               }
               System.out.println();
               if (!(courses[3][column].contains("x"))) { 
                  sum += Double.parseDouble(courses[3][column]);
                  count++; 
               }
            }
         }
      }
      avg = sum / count;
      System.out.printf("The average course rating is %.2f", avg);
   }  
}