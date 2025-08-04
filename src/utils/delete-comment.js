import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; // sesuaikan path jika berbeda

const deleteAllComments = async () => {
  try {
    const commentsRef = collection(db, "comments");
    const snapshot = await getDocs(commentsRef);

    snapshot.forEach(async (commentDoc) => {
      await deleteDoc(doc(db, "comments", commentDoc.id));
      console.log(`Deleted comment with ID: ${commentDoc.id}`);
    });

    console.log("All comments deleted successfully.");
  } catch (error) {
    console.error("Error deleting comments: ", error);
  }
};

deleteAllComments();
