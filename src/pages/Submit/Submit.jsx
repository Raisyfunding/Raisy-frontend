import React, { useEffect, useState, useRef, forwardRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDropzone } from "react-dropzone";
import { Screen } from "../../styles/globalStyles";
import {
  Flex,
  HStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
  useNumberInput,
  Link,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./components/datepicker.scss";

function Submit() {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [staggered, setStaggered] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [titleError, setTitleError] = useState(null);
  const [amountError, setAmountError] = useState(null);
  const [date, setDate] = useState(new Date());
  const [nbMilestones, setNbMilestones] = useState(2);
  const [pctReleasePerMilestone, setPctReleasePerMilestone] = useState([
    50, 100,
  ]);
  const handleChangeTitle = (event) => setTitle(event.target.value);
  const handleChangeAmount = (event) => setAmount(event.target.value);

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
      setTitleError("This field can't be blank");
    } else {
      setTitleError(null);
    }
  };

  const validAmount = (amount) => /^\d+$/.test(amount);

  const validateAmount = () => {
    if (amount.length === 0) {
      setAmountError("This field can't be blank");
    } else if (validAmount(amount)) {
      setAmountError(null);
    } else {
      setAmountError("Invalid amount.");
    }
  };

  const givesArray = () => {
    if (nbMilestones === 2) {
      setPctReleasePerMilestone([20, 60]);
    } else if (nbMilestones === 3) {
      setPctReleasePerMilestone([20, 60, 80]);
    } else if (nbMilestones === 4) {
      setPctReleasePerMilestone([20, 60, 70, 80]);
    } else {
      setPctReleasePerMilestone([20, 60, 70, 80, 100]);
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

  const {
    getInputProps: getNumberInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 2,
    min: 2,
    max: 5,
    precision: 0,
    onChange: (_, _val) => {
      // setPctReleasePerMilestone([0, ...pctReleasePerMilestone]);
      setNbMilestones(_val);
      givesArray();
    },
  });

  useEffect(() => {
    givesArray();
    console.log(nbMilestones);
  }, [nbMilestones]);

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getNumberInputProps({ isReadOnly: true });

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Input
      textAlign={"center"}
      isRequired={"true"}
      onClick={onClick}
      ref={ref}
      readOnly
      value={value}
    />
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

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
          isInvalid={titleError}
          onBlur={validateTitle}
          maxLength={30}
          onChange={handleChangeTitle}
          value={title}
          borderColor={useColorModeValue("var(--black)", "var(--white)")}
          variant={title.length > 0 ? "filled" : "outline"}
          border={title.length > 0 ? "none" : "solid 1px"}
        />
        <Flex flexDirection={"row"} paddingBottom={"50px"}>
          <Text color={"red"}>{titleError}</Text>
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
                border: "dashed 1px",
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
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          paddingTop={"50px"}
          fontSize={"1.5em"}
        >
          Amount to raise *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide the amount you want to raise.
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2em"
            children="$"
          />
          <Input
            colorScheme={"red"}
            placeholder="Amount to raise"
            isRequired={"true"}
            isInvalid={amountError}
            onBlur={validateAmount}
            maxLength={10}
            onChange={handleChangeAmount}
            value={amount}
            borderColor={useColorModeValue("var(--black)", "var(--white)")}
            variant={amount.length > 0 ? "filled" : "outline"}
            border={amount.length > 0 ? "none" : "solid 1px"}
          />
        </InputGroup>
        <Flex flexDirection={"row"} paddingBottom={"50px"}>
          <Text color={"red"}>{amountError}</Text>
          <Text
            color={useColorModeValue("var(--black)", "var(--white)")}
            marginLeft={"auto"}
          >
            {title.length}/10
          </Text>
        </Flex>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Date of the end of the campaign *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Please provide the date you want to end the campaign.
        </Text>
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          showTimeSelect
          dateFormat="Pp"
          customInput={<CustomInput />}
        />
        <Text
          paddingTop={"50px"}
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"5px"}
          fontSize={"1.5em"}
        >
          Staggered Release *
        </Text>
        <Text
          color={useColorModeValue("var(--black)", "var(--white)")}
          marginBottom={"10px"}
          fontStyle={"italic"}
          textAlign={"justify"}
        >
          Do you want to enable staggered release? For more info click{" "}
          <Link color={"blue.400"}>here</Link>
        </Text>
        <RadioGroup onChange={() => setStaggered(!staggered)} value={staggered}>
          <Stack direction="row">
            <Radio
              borderColor={useColorModeValue("var(--black)", "var(--white)")}
              value={true}
            >
              Yes
            </Radio>
            <Radio
              value={false}
              borderColor={useColorModeValue("var(--black)", "var(--white)")}
            >
              No
            </Radio>
          </Stack>
        </RadioGroup>
        {staggered ? (
          <>
            <Text marginBottom={"5px"} fontSize={"1.5em"} paddingTop={"50px"}>
              Number of milestones *
            </Text>
            <Text
              marginBottom={"10px"}
              fontStyle={"italic"}
              textAlign={"justify"}
            >
              Please give the number of milestones of the staggered release.
            </Text>
            <HStack paddingTop={"10px"} justifyContent={"center"}>
              <Button {...dec}>-</Button>
              <Input
                {...input}
                display={"flex"}
                textAlign={"center"}
                width={"80px"}
              />
              <Button {...inc}>+</Button>
            </HStack>
            <RangeSlider
              aria-label={["min", "max"]}
              onChange={this.handleChange}
              defaultValue={pctReleasePerMilestone}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              {pctReleasePerMilestone.map((_, idx) => (
                <RangeSliderThumb index={idx} />
              ))}
            </RangeSlider>
          </>
        ) : (
          <></>
        )}
      </Flex>
      <Footer />
    </Screen>
  );
}
export default Submit;
