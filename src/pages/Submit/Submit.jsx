import React, { useEffect, useState, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDropzone } from "react-dropzone";
import { Screen } from "../../styles/globalStyles";
import { Flex, Image, Input, Text, useColorModeValue } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer.jsx";

function Submit() {
  const inputRef = useRef(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [nameError, setNameError] = useState(null);
  const handleChange = (event) => setTitle(event.target.value);

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const validateTitle = () => {
    if (title.length === 0) {
      setNameError("This field can't be blank");
    } else {
      setNameError(null);
    }
  };

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Screen
      style={{
        backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
      }}
    >
      <Text
        marginRight={"auto"}
        paddingTop={"20px"}
        marginLeft={"auto"}
        fontSize={{ base: "3xl", lg: "4xl", xl: "5xl" }}
        paddingBottom={"40px"}
      >
        Submit a project
      </Text>
      <Flex
        flexDirection={"column"}
        maxWidth={"70vw"}
        paddingLeft={"20px"}
        paddingBottom={"50px"}
        margin={"auto"}
      >
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Title of your campaign *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
        >
          Be concise and to the point
        </Text>
        <Input
          colorScheme={"red"}
          placeholder="Title of the campaign"
          isRequired={"true"}
          isInvalid={nameError}
          onBlur={validateTitle}
          maxLength={30}
          onChange={handleChange}
          value={title}
          borderColor={useColorModeValue("var(--black)", "var(--white)")}
          variant={title.length > 0 ? "filled" : "outline"}
          border={title.length > 0 ? "none" : "solid 1px"}
        />
        <Flex flexDirection={"row"} paddingBottom={"50px"}>
          <Text color={"red"}>{nameError}</Text>
          <Text
            color={useColorModeValue("var(--black)", "var(--white)")}
            marginLeft={"auto"}
          >
            {title.length}/30
          </Text>
        </Flex>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Description of your project *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide a detailed description of your campaign, so that users
          can get an idea of the campaign. Be creative, and precise.
        </Text>
        <MDEditor value={description} onChange={setDescription} />
        <Text
          paddingTop={"50px"}
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Image/Video of presentation*
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide an Image or a Video to illustrate your campaign
        </Text>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p
              style={{
                border: "dashed 2px",
                borderRadius: "7px",
                paddingTop: "100px",
                paddingBottom: "100px",
                textAlign: "center",
              }}
            >
              Drop the files here ...
            </p>
          ) : (
            <p
              style={{
                border: "dashed 2px",
                borderRadius: "7px",
                paddingTop: "100px",
                paddingBottom: "100px",
                textAlign: "center",
              }}
            >
              Drag and drop some files here, or click to select files
            </p>
          )}
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </Flex>
      <Footer />
    </Screen>
  );
}
export default Submit;
