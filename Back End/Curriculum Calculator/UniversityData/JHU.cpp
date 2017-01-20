#import "../Major.cpp"

void main()
{
   std::vector<int> req {550171, 550420, 550430, 550361};
   std::vector<int> opt1 {110106, 110108};
   std::vector<int> opt2 {110107, 110109};
   std::vector<int> opt3 {110201, 110212};
   std::vector<int> opt4 {110302, 110306, 110417, 550386, 550388, 550391};
   std::vector<int> opt5 {171426, 250205, 550200, 510202, 530371, 540305, 550281, 550383, 550385, 550386, 550383, 550400, 550413, 550415, 550433, 550436, 550443, 550450, 550487, 550493, 560220, 570210, 580200, 580223, 600475};
   std::vector<int> opt6 {550362,550400,550453,550463}
      std::vector<std::vector<int>> opt {opt1, opt2, opt3, opt4, opt5, opt6};
   std::vector<int> shit {2, 122000010, 318000010, 112001000};
   std::vector<int> dist;
   Major* AMSBSOOR = new Major::Major(550, 0, req, opt, shit, dist, true, 3);
   jhuMajors[55013] = AMSBSOOR;
}
