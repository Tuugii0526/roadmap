1. nodejs гэж юу вэ ?
   Nodejs нь нээлттэй ,олон төрлийн систем дээр ажиллах боломжтой javascript ийн ажиллах орчин .
   Nodejs нь v8 ийг ашигладаг , энэ нь chrome ийн үндсэн мотор .
   Хүсэлтийг `cpu их ажилтай` эсвэл `оролт гаралтын их ажилтай` хэмээн 2 хуваадаг . CPU их ажилтайд зураг боловсруулах , машин сургах гэх мэт . Харин оролт гаралтын их ажилтайд файл унших , датабазаас дата гэх мэт ажээ .
   Thread нь энгийнээр ажилтан гэсэн үг . Nodejs нь ганцхан ажилтантай .

   nodejs нь asynchronous i/o өөрөө алдартай .Зөөгч гал тогоонд нэг үйлчлүүлэгчээс хүсэлт аваад хоол гарахыг хүлээхгүй , харин бусад үйлчлүүлэгчийг үйлчилдэг . Хэрвээ хоол гарахыг хүлээвэл энэ нь `blocking ` болно . Харин хүлээхгүйгээр бусад үйлчлүүлэгчид үйлчилж байх зуур хоол болоод үйлчилвэл хурдан .

2. a set of asynchronous i/o primitives are used in node. So it is fast .
